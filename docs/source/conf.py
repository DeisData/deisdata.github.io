# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html


from pathlib import Path

def remove_tabs_js(app, exc):
    if app.builder.format == 'html' and not exc:
        tabs_js = Path(app.builder.outdir) / '_static' / 'tabs.js'
        tabs_js.unlink()

def setup(app):
    app.connect('build-finished', remove_tabs_js)

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'DeisData'
copyright = '2023, Ford Fishman'
author = 'Ford Fishman'
release = '1.01'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx_toolbox.collapse',
    'sphinx_inline_tabs',
    'sphinxcontrib.youtube'
]

templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'furo'
html_static_path = ['_static']
html_css_files = [
    'css/custom.css',
]
html_favicon = "../../favicon/favicon-32x32.png"
html_logo = "_static/images/DeisDatax1x_medium.png"
html_title = "DeisData"
