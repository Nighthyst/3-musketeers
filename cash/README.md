# Cash

The purpose of this module is to know the value of one currency regarding to other currencies.

# Example

To run the default mode of the application go to the folder where cash.js is and open a terminal and run the command :

    node cash.js

You will have the basic default output:

[Value of the japanese yen in different currencies] (images/Basic output.png)

# API

By default the program give the value of 1 USD dollar in euro, japanese yen and British pound sterling. You can actually change this in the constants.js file. Open it with your favorite text editor and  if you want to have more currencies to convert the dollar add them in this array :

    const DEFAULT_TO_CURRENCIES = ['EUR', 'USD', 'GBP', 'JPY'];

Here you can find all possible currencies names [here](https://api.exchangeratesapi.io/latest).

# Installation

To run this application you first need to have [Node.js](https://nodejs.org/en/download/), then open a terminal and run the following command to install all packages used by cash :

    npm i

# License

MIT
