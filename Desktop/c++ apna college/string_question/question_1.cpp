#include <iostream>
#include <string>

int main() {
    std::string input;
    int vowelCount = 0;

    std::cout << "Enter a string: ";
    std::getline(std::cin, input);

    for (char c : input) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            vowelCount++;
        }
    }

    std::cout << "Number of lowercase vowels: " << vowelCount << std::endl;

    return 0;
}