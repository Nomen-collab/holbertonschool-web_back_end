#!/usr/bin/env python3
"""Module pour trouver les écoles par sujet dans une collection MongoDB."""

def schools_by_topic(mongo_collection, topic):
    """
    Retourne la liste des écoles ayant un sujet spécifique.

    Args:
        mongo_collection: L'objet collection PyMongo.
        topic (str): Le sujet recherché.

    Returns:
        Une liste de dictionnaires représentant les écoles qui correspondent au sujet.
    """
    return list(mongo_collection.find({"topics": topic}))
