// QUESTION NUMBER :-8
// Write a program to show number entered by user except multiples of 10 :-
#include <iostream>
using namespace std;
int main()
{
    int n;
    do
    {
        cout << "Enter number :";
        cin >> n;
        if (n % 10 == 0)
        {
            continue;
            
        }
        cout << "Your entered :" << n << endl;

    } while (true);
    return 0;
}
