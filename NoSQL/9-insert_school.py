#!/usr/bin/env python3
"""Module pour insérer un document dans une collection MongoDB."""

def insert_school(mongo_collection, **kwargs):
    """
    Insère un nouveau document dans une collection basée sur des arguments
    clé-valeur.

    Args:
        mongo_collection: L'objet collection PyMongo.
        **kwargs: Les attributs du document à insérer.

    Returns:
        Le nouvel _id du document inséré.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
