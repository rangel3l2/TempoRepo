from selenium.webdriver.common.by import By
from backend.classes.window import WindowOperations
from backend.classes.city import CityOperations
from backend.classes.state import StateOperations
import csv

class SchoolOperations:
    def __init__(self,driver):
        self.driver = driver

    def set_type_of_school(self,type_school): 
        checkbox_public = self.driver.find_element(By.XPATH,'//*[@id="institutions"]/table/tbody/tr/td/table/tbody/tr[4]/td[3]/font/input')

        checkbox_private = self.driver.find_element(By.XPATH,'//*[@id="institutions"]/table/tbody/tr/td/table/tbody/tr[5]/td[3]/font/input')

        checkbox_dict = {
            'public': checkbox_public,
            'private': checkbox_private
        }
        
        type_school = type_school.lower()
        types_str_list = type_school.split(' ')

        for type in types_str_list:
            if type in checkbox_dict:
                checkbox_dict[type].click()

    def adjust_description_line(self,description,type_school):
        description_line = description.text.splitlines() 
        del description_line[3:]
        description_line[2] = description_line[2].replace(' ','')
        description_line[2] = description_line[2][:13]
        description_line.append(type_school)

        return description_line

    def set_school_description(self,csv_file,number_school,count): 
        public_schools_table = self.driver.find_elements(By.ID,'hiddenitems_school') 
        private_schools_table = self.driver.find_elements(By.ID,'hiddenitems_privschool') 

        spam_writer = csv.writer(csv_file, dialect='excel')

        if public_schools_table:
            public_schools_descriptions = public_schools_table[0].find_elements(By.CLASS_NAME,'InstDesc')
            for description in public_schools_descriptions:
                if count >= number_school and number_school != -1:
                    break
                if description.get_attribute('align') != 'center':
                    description_line = self.adjust_description_line(description,'Public')
                    spam_writer.writerow(description_line)
                    count += 1

        if private_schools_table:
            private_schools_descriptions = private_schools_table[0].find_elements(By.CLASS_NAME,'InstDesc')
            for description in private_schools_descriptions:
                if count >= number_school and number_school != -1:
                    break
                if description.get_attribute('align') != 'center':
                    description_line = self.adjust_description_line(description,'Private')
                    spam_writer.writerow(description_line)
                    count += 1

        return count

    def search_school(self,number_school,type_school):
        window = WindowOperations(self.driver)
        city = CityOperations(self.driver)
        state = StateOperations('select',self.driver)

        self.set_type_of_school(type_school)
        states_options = state.return_select_options()

        csv_file = open('US_Schools.csv', 'w', newline='', encoding='utf-8')
        spam_writer = csv.writer(csv_file, dialect='excel')
        spam_writer.writerow(["Name","Adress","Phone","Type"])

        index = 0
        count = 0

        for index in range(len(states_options)):
            if count >= number_school and number_school != -1:
                break
            states_options[index].click()
            window.open_citys_window()
            window.switch_window(1)
            citys_names = city.get_citys_names()
            self.driver.close()
            window.switch_window(0)
            for city_name in citys_names:
                if count >= number_school and number_school != -1:
                    break
                city.put_city_in_input_box(city_name)
                count = self.set_school_description(csv_file,number_school,count)

            states_options = state.return_select_options()
            index += 1

        csv_file.close()

        return count
