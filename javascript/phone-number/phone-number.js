function PhoneNumber(phoneNumber) {
    // cleanNum regex sets up pattern
    var cleanNum = new RegExp(["^", "1?", "(\\d{3})", "(\\d{3})", "(\\d{4})", "$"].join("\\D*"));
    // phoneNumMatch sets phoneNumber input to string and parse through regex
    var phoneNumMatch = phoneNumber.toString().match(cleanNum);

    if (phoneNumMatch) {
        this.areaCode = phoneNumMatch[1];
        this.firstThree = phoneNumMatch[2];
        this.secondFour = phoneNumMatch[3];
        this.completePhone = phoneNumMatch[1] + phoneNumMatch[2] + phoneNumMatch[3];
    }
    //  else if (/[2-9]/g.test(this.area[0])) {
    //     return null;
    //     // else if not catching area code value to test for first num in area
    // }
    else {
        return null;
    }
}

PhoneNumber.prototype.number = function() {
    return this.completePhone;

}

module.exports = PhoneNumber;
