import pandas as pd
import streamlit as st
import streamlit.components.v1 as components


# define react component
_selectable_data_table = components.declare_component(
    "selectable_data_table", url="http://localhost:3001"
)


def selectable_data_table(data, key=None):
    return _selectable_data_table(data=data, default=[], key=key)


# load data
raw_data = {
    "name": ["Anna", "Berta", "Caroline"],
    "favorite_color": ["blue", "red", "yellow"],
    "details": [
        "a long text with a lot of details that I want to show in the detail row",
        "a long text with a lot of details that I want to show in the detail row",
        "a long text with a lot of details that I want to show in the detail row",
    ],
}

df = pd.DataFrame(raw_data, columns=["name", "favorite_color", "details"])

test_array = df.to_dict("records")
rows = selectable_data_table(test_array)
