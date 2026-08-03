// question :- 2
// You are given two strings s1 and s2 of equal length. A string swap is an 
// operation where you choose two indices in a string (not necessarily different) and 
// swap the characters at these indices.



// #include <iostream>
// #include <string>
// #include <vector>

// bool canBeEqualWithOneSwap(const std::string& s1, const std::string& s2) {
//     if (s1.length() != s2.length()) {
//         return false;
//     }

//     std::vector<int> diffIndices;
//     for (int i = 0; i < s1.length(); ++i) {
//         if (s1[i] != s2[i]) {
//             diffIndices.push_back(i);
//         }
//     }

//     if (diffIndices.size() == 0) {
//         return true; // Strings are already equal
//     }

//     if (diffIndices.size() != 2) {
//         return false; // More than one swap needed
//     }

//     // Check if swapping the differing characters makes the strings equal
//     return (s1[diffIndices[0]] == s2[diffIndices[1]] && s1[diffIndices[1]] == s2[diffIndices[0]]);
// }

// int main() {
//     std::string s1 = "converse";
//     std::string s2 = "conserve";

//     if (canBeEqualWithOneSwap(s1, s2)) {
//         std::cout << "The strings can be made equal with one swap." << std::endl;
//     } else {
//         std::cout << "The strings cannot be made equal with one swap." << std::endl;
//     }

//     return 0;
// }






// question :- 2
// You are given two strings s1 and s2 of equal length. A string swap is an 
// operation where you choose two indices in a string (not necessarily different) and 
// swap the characters at these indices.






// Return true if it is possible to make both strings equal by performing at most one
#include <iostream>
#include <string>
#include <vector>
using namespace std;
bool areAlmostEqual(string s1, string s2) { 
    if(s1.length() != s2.length()) { 
    return false; 
    } 
     
     
    char diffChar1, diffChar2; 
    int diff = 0; 
    for(int i=0; i<s1.length(); i++) { 
    if(s1[i] != s2[i]) { 
    if(!diff) { 
    diffChar1 = s1[i]; 
    diffChar2 = s2[i]; 
    } else { 
    if(s1[i] != diffChar2 || s2[i] != diffChar1) { 
    return false; 
    }
} 
diff++; 
} 
diff++; 
if(diff > 2) { 
return false; 
} 
} 
return diff == 0 || diff == 2; 
}

int main() {
    std::string s1 = "converse";
    std::string s2 = "conserve";

    if (areAlmostEqual(s1, s2)) {
        std::cout << "The strings can be made equal with one swap." << std::endl;
    } else {
        std::cout << "The strings cannot be made equal with one swap." << std::endl;
    }

    return 0;
}