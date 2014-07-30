Using the selenium server at http://localhost:4444/wd/hub
|   | passed | failed | pending | TOTAL |
|---|-------:|-------:|--------:|------:|
| Features (US) | 1 | 0 | 0 | 1 |
| Scenarios (TC) | 4 | 0 | 2 | 6 |
| Variants (DS) | 4 | 0 | 2 | 6 |

# TOC
- [Feature: Contextual Menu](#feature-contextual-menu)
  - [Scenario: Contextual menu from not compressed file](#feature-contextual-menu-scenario-contextual-menu-from-not-compressed-file)
  - [Scenario: Contextual menu from compressed file](#feature-contextual-menu-scenario-contextual-menu-from-compressed-file)
  - [Scenario: Contextual menu from folder](#feature-contextual-menu-scenario-contextual-menu-from-folder)
  - [Scenario: Contextual menu with several elements selected](#feature-contextual-menu-scenario-contextual-menu-with-several-elements-selected)
  - [Scenario: Contextual menu not showed in sidebar](#feature-contextual-menu-scenario-contextual-menu-not-showed-in-sidebar)
  - [Scenario: Contextual menu without selection](#feature-contextual-menu-scenario-contextual-menu-without-selection)

<a name="feature-contextual-menu"></a>
## Feature: Contextual Menu
- As a user
- I want have a contextual menu in the files application

---
<a name="feature-contextual-menu-scenario-contextual-menu-from-not-compressed-file"></a>
### Scenario: Contextual menu from not compressed file
<pre><code><b>Given:</b> There is one file not compressed
<b> When:</b> I do right click in the file
<b> Then:</b> I obtain the not compressed menu elements: Open,Rename</code></pre>

<a name="feature-contextual-menu-scenario-contextual-menu-from-compressed-file"></a>
### Scenario: Contextual menu from compressed file
<pre><code><b>Given:</b> There is one compressed file
<b> When:</b> I do right click in the file
<b> Then:</b> I obtain the compressed menu elements: Open,Rename</code></pre>

<a name="feature-contextual-menu-scenario-contextual-menu-from-folder"></a>
### Scenario: Contextual menu from folder
<pre><code><b>Given:</b> There is one folder
<b> When:</b> I do right click in the folder
<b> Then:</b> I obtain the folder menu elements: Open,Rename</code></pre>

<a name="feature-contextual-menu-scenario-contextual-menu-with-several-elements-selected"></a>
### Scenario: Contextual menu with several elements selected
<pre><code><b>Given:</b> There are several elements selected
<b> When:</b> I do right click in the folder
<b> Then:</b> I obtain the folder menu elements: Open</code></pre>

<a name="feature-contextual-menu-scenario-contextual-menu-not-showed-in-sidebar"></a>
### ~~Scenario: Contextual menu not showed in sidebar~~

<a name="feature-contextual-menu-scenario-contextual-menu-without-selection"></a>
### ~~Scenario: Contextual menu without selection~~


