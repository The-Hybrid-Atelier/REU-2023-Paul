from owlready2 import *

onto = get_ontology("glassblowing.rdf").load()
master_dictionary = list(onto.classes()) + list(onto.individuals()) + list(onto.data_properties()) + list(onto.object_properties())

# This lists out all the classes that ends with 'Technique'
# print(onto.search(iri = "*Technique"))

techniques = onto.search(iri = "*Technique")
# print(getattr(onto, 'BlowTechnique'))

entity = getattr(onto, "PersonalProtectiveEquipment")
# This will print glassblowing.PersonalProtectiveEquipment
print(entity)

# Prints just the name of the entity
# print(entity.name)

# I don't know what this does
# instances = getattr(entity, "instances", None)

# This gets all the instances of the entity
print(entity.instances())

#This gets the comment and isDefinedBy parameter for entity
print(entity.comment)
print(entity.isDefinedBy)