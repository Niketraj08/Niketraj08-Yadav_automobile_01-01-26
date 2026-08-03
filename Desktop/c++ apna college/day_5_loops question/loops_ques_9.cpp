// QUESTION NUMBER :-9
// Check if a number is prime ot nit :-
#include <iostream>
using namespace std;
int main()
{
    int n = 8;
    bool isPrime = true;
    for (int i = 2; i <= n - 1; i++)
    {
        if (n % i == 0)
        {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
    {
        cout << " Number is Prime " << endl;
    }
    else
    {
        cout << " Number is NOT Prime :" << endl;
    }
    return 0;
}