// Question 2 :
// Write a program  to print the multiplication table of a number, entered by the user.
// An Armstrong number is a number that is equal to the sum of cubes of its digits.
#include <iostream>
using namespace std;
int main()

{
    int n;
    cout << "Enter the number " << endl;
    cin >> n;
    for (int i = 1; i <= 10; i++)
    {
        cout << (n * i) << " ";
    }
    cout << endl;
}