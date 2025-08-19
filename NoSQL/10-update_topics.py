#!/usr/bin/env python3
"""Module pour mettre à jour les sujets d'une école dans une collection MongoDB."""

def update_topics(mongo_collection, name, topics):
    """
    Modifie tous les sujets d'un document d'école en se basant sur le nom.

    Args:
        mongo_collection: L'objet collection PyMongo.
        name (str): Le nom de l'école à mettre à jour.
        topics (list of str): La liste des sujets abordés dans l'école.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
