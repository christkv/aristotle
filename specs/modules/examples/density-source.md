# Density: original teaching fixture

This is an original, deliberately bounded source fixture for an external-agent build exercise. It is not a child's textbook, a curriculum assignment or experimental data.

<a id="relationship"></a>
## Relationship

Density is mass divided by volume: density = mass / volume. In this fixture, mass is in grams (g), volume in cubic centimetres (cm³), and density in grams per cubic centimetre (g/cm³). A model sample with mass 60 g and volume 20 cm³ has density 3 g/cm³.

<a id="model"></a>
## Model and explanation

Treat each question as an idealised uniform sample with constant density. For samples with the same model density, doubling volume doubles mass while density remains constant. The mass-versus-volume graph is a straight line through the origin. These are constructed quantities, not measured values or properties of named real substances. Temperature, pressure, material changes and uncertainty are outside this model.

In learn mode, show a table of volumes 5, 10, ..., 50 cm³ and their calculated masses for one selected density. The graph has volume on the horizontal axis and mass on the vertical axis. Vary volume while holding density fixed; calculate mass from the same exact state. Comparing different densities is a separate explicitly labelled model change.

<a id="domain"></a>
## Generated domain

Choose integer density d from 1 through 8 and volume v from {5,10,15,20,25,30,35,40,45,50}; set mass m = d*v. There are 80 parameter pairs. Ask for density given mass and volume; withhold d from student-facing answer fields. All values are exact constructed values. Do not ask for rounding, significant figures, conversions or measurements in this family.

<a id="marking"></a>
## Marking

The response is an object with string fields value and unit. Value accepts a signed integer, a finite decimal using a dot, or a fraction of signed integers with a nonzero denominator, with surrounding whitespace ignored. No functions, variables or scientific notation. Parse exact rationals. Give one binary mark for density-value when value * volume = mass. Give a separate binary mark for density-unit when the unit is g/cm³ or g/cm3, ignoring surrounding whitespace. No other unit aliases or conversions are supported.

The recognised wrong units g, cm³, cm3, g/cm² and g/cm2 earn no unit mark. Other unit strings leave both criteria unassessed because interpreting the value may require an unsupported conversion; do not silently mark a physically equivalent converted answer wrong. Invalid values with recognised units are unassessed for the value criterion. Preserve any independently known criterion result. Overall unassessed takes precedence over partial while a required criterion is unresolved. A zero or negative numeric density answer is parseable and incorrect for the value criterion, not malformed input.

For mass 60 g and volume 20 cm³: {value:"3",unit:"g/cm3"} earns two marks; {value:"6/2",unit:"g/cm³"} also earns two; {value:"3",unit:"g"} earns only the value mark; {value:"4",unit:"g/cm3"} earns only the unit mark; {value:"4",unit:"g"} earns neither. {value:"1/0",unit:"g/cm3"} remains unassessed overall, preserving the unit mark.
