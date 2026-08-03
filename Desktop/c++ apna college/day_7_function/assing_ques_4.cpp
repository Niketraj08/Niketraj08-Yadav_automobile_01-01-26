// QUESTION 4 :- Write a function to a print a number is prime or not .
// 0:- true
// 1:- flase
#include <iostream >
using namespace std;
bool isPrime(int n)
{
    if (n == 1)
    {
    }
    for (int i = 2; i <= n - 1; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}
int main()
{
    cout << isPrime(23) << endl;
    return 0;
}