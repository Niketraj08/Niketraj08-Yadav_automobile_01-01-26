// Question 5 : For a positive N , Write a program that prints the first N Fibonacci numbers.(Assume N >= 2)

// Fibonacci series : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ….
// This is a series where each number is a sum of previous 2 numbers in the series.Eg
// : 1 = 0 + 1,
// 2 = 1 + 1,
// 3 = 1 + 2,
// 5 = 2 + 3,
// 8 = 3 + 5 & so on
#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter the number :";
    cin >> n;
    int first = 0, sec = 1;
    cout << first << " " << sec << " ";
    for (int i = 2; i < n; i++)
    {
        int third = first + sec;
        cout << third << " ";
        first = sec;
        sec = third;
    }
    cout << "\n";
    return 0;
}