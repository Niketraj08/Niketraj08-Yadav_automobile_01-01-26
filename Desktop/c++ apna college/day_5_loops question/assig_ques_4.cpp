// Question 4 : For a positive N , Write a program that prints all the prime numbers from 2 to N. (Assume N >= 2)
// user input value .........?
#include <iostream>
using namespace std;
int main()
{
    int N;
    cout << "enter a number :";
    cin >> N;
    for (int i = 2; i <= N; i++)
    {
        int curr = i; 
        bool isPrime = true;
        for (int j = 2; j * j <= i; j++)
        {
            if (curr % j == 0)
            {
                isPrime = false;
            }
        }
        if (isPrime)
        {
            cout << curr << " ";
        }
    }
    cout << endl;
    return 0;
}