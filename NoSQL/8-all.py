#!/usr/bin/env python3
"""Module pour lister tous les documents d'une collection MongoDB."""

def list_all(mongo_collection):
    """
    Liste tous les documents d'une collection.

    Args:
        mongo_collection: L'objet collection PyMongo.

    Returns:
        Une liste de tous les documents dans la collection,
        ou une liste vide si la collection est vide.
    """
    documents = mongo_collection.find()
    return list(documents)
