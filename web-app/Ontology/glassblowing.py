from owlready2 import *

import json

onto = get_ontology("glassblowing.rdf").load()
master_dictionary = list(onto.classes()) + list(onto.individuals()) + list(onto.data_properties()) + list(onto.object_properties())

# This lists out all the classes that ends with 'Technique'
# print(onto.search(iri = "*Technique"))

# techniques = onto.search(iri = "*Technique")
# print(getattr(onto, 'BlowTechnique'))

# entity = getattr(onto, "PersonalProtectiveEquipment")
# This will print glassblowing.PersonalProtectiveEquipment
# print(onto.get_children_of(entity))

# Prints just the name of the entity
# print(entity.name)

# I don't know what this does
# instances = getattr(entity, "instances", None)

# This gets all the instances of the entity
# print(entity.instances())

#This gets the comment and isDefinedBy parameter for entity
# print(entity.comment)
# print(entity.isDefinedBy)

def makeJson(curr_element,parent_class,jsonDict):
    #
    # If class, then append it to JSON with 
    # empty object
    if curr_element:
        jsonDict[str(curr_element)] = {}
        for element in onto.get_children_of(curr_element):
            if onto.get_instances_of(element):
                jsonDict[str(curr_element)][str(element)] = []
                for e in onto.get_instances_of(element):
                    jsonDict[str(curr_element)][str(element)].append(str(e))
            else:
                makeJson(element,curr_element,jsonDict[str(curr_element)])
    

json_dict = {}

super_entity = getattr(onto, "Glassblowing")
for entity in onto.get_children_of(super_entity):
    makeJson(entity,None,json_dict)

print("Dictionary ",json_dict)
'''
   Glassblowing:
      Maker
      FixtureEquipment

'''
json_object = json.dumps(json_dict, indent=4)

with open("sample.json", "w") as outfile:
    outfile.write(json_object)