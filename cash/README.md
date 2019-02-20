# Cash

The purpose of this module is to make come currency conversions.

# Example

To run the default mode of the application go to the folder where cash.js is and open a terminal and run the command :

    node cash.js

You will have the basic default output:

![Value of the japanese yen in different currencies] (https://github.com/Nighthyst/3-musketeers/blob/master/cash/images/Basic%20output.PNG)

Meanwhile you can change which currency you want as the reference and which currencies will be compared to this one with the syntax npm index --set

# API

## Command lines

### node index --set

Meanwhile you can change which currency you want as the reference and which currencies will be compared to this one with the syntax npm index --set :

    node cash --set [currency-reference] [currency1] [currency2] ...

For example :

![Using --set](https://github.com/Nighthyst/3-musketeers/blob/master/cash/images/using_--set.PNG)

### node index --save

Pay attention to the fact that with this command line you do not change the default output. If you want to change it to you need to use the option --save.

    node cash --save [currency-reference] [currency1] [currency2] ...

Here is an example :

![The power of --save](https://github.com/Nighthyst/3-musketeers/blob/master/cash/images/--save%20power.PNG)

You CAN'T combine --set and --save to set and save in one command line.

### node index [amount] [ref_currency] [currency1] ... pln

Knowing the exchange rate of a currency is great but you can use the API to convert also:

    node index [amount] [ref_currency] [currency1] ... pln

You will end up with the amount of money in the reference currency converted in all currencies listed after. Example :

![Currency conversion](https://github.com/Nighthyst/3-musketeers/blob/master/cash/images/conversion.PNG)


Here you can find all possible currencies names [here](https://api.exchangeratesapi.io/latest).

# Installation

To run this application you first need to have [Node.js](https://nodejs.org/en/download/), then open a terminal and run the following command to install all packages used by cash :

    npm i

# License

MIT
