// Describe a Function
function describe_city (city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}`);
}

// Calling the Function
describe_city("Karachi");

describe_city("Lahore");

describe_city("Berlin", "Germany");