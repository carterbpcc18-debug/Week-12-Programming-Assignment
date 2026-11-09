// Sample User Data
const sampleUsers = [
    {
        name: "Alex Johnson",
        username: "alex_j",
        phone: "555-234-5678",
        promoCode: "SUMMER"
    },
    {
        name: "B",
        username: "cool_user_123",
        phone: "555.345.6789",
        promoCode: "summer"
    },
    {
        name: "Charlie Brown",
        username: "charlie!brown",
        phone: "5554567890",
        promoCode: "SUMMER2026"
    },
    {
        name: "Dana Scully",
        username: "da",
        phone: "555-567-8901",
        promoCode: "SuMmEr"
    },
    {
        name: "Edward Nygma",
        username: "the_riddler_super_fan",
        phone: "555-678-901",
        promoCode: null
    },
    {
        name: "Fiona Gallagher",
        username: "fiona_g",
        phone: "555-789-0123",
        promoCode: ""
    }
];

// Validate Name
function validateName(name) {
    return /^[a-zA-Z ]{2,}$/.test(name);
}

// Validate Username
function validateUsername(username) {
    return /^\w{3,12}$/.test(username);
}

// Validate Phone
function validatePhone(phone) {
    return /^\d{3}[-.]?\d{3}[-.]?\d{4}$/.test(phone);
}

// Validate Promo Code
function validatePromoCode(promo) {
    return /^SUMMER$/i.test(promo);
}

// Format Phone Number
function formatPhoneNumber(phone) {
    const phoneRegex = /^(\d{3})[-.]?(\d{3})[-.]?(\d{4})$/;

    if (!phoneRegex.test(phone)) {
        return null;
    }

    return phone.replace(phoneRegex, "($1) $2-$3");
}

// Process Registration
function processRegistration(user) {
    const errors = [];

    if (!validateName(user.name)) {
        errors.push("Invalid name");
    }

    if (!validateUsername(user.username)) {
        errors.push("Invalid username");
    }

    if (!validatePhone(user.phone)) {
        errors.push("Invalid phone");
    }

    if (errors.length > 0) {
        return {
            success: false,
            errors: errors
        };
    }

    return {
        success: true,
        data: {
            name: user.name,
            username: user.username,
            phone: formatPhoneNumber(user.phone),
            discountApplied: validatePromoCode(user.promoCode)
        }
    };
}

// Process All Sample Users
console.log("REGISTRATION RESULTS");

sampleUsers.forEach(user => {
    const result = processRegistration(user);
    console.log(user.name, result);
});

// Additional Edge Cases
const edgeCases = [
    {
        name: "George Miller",
        username: "george@123",
        phone: "555-123-4567",
        promoCode: "SUMMER"
    },
    {
        name: "Hannah Smith",
        username: "hannah_s",
        phone: "555 123 4567",
        promoCode: "WINTER"
    }
];

// Test Additional Edge Cases
console.log("EDGE CASE RESULTS");

edgeCases.forEach(user => {
    const result = processRegistration(user);
    console.log(user.name, result);
});

// Test Username Length Boundaries
console.log("USERNAME LENGTH TESTS");

console.log("3 Characters:", validateUsername("abc"));
console.log("12 Characters:", validateUsername("abcdefghijkl"));
console.log("13 Characters:", validateUsername("abcdefghijklm"));