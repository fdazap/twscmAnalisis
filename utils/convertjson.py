import csv
import json

csv_file_path = 'Capacidades.csv'  # Specify the path to your CSV file
json_file_path = 'Capacidades.json'  # Specify the path where you want to save the JSON file

results = []

with open(csv_file_path, 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file, delimiter=';')
    for row in csv_reader:
        results.append(row)
        
print (results)

with open(json_file_path, 'w') as json_file:
    json.dump(results, json_file, indent=2)

print('JSON file generated successfully!')
