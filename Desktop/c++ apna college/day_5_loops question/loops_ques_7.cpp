// QUESTION NUMBER :-7
// Write a program where user can keep entering number till they enter a multiple of 10:-
#include <iostream>
using namespace std;
int main()
{
    int n;
    do
    {
        cout << "Enter number :";
        cin >> n;
        if (n% 10 == 0)
        {
            break;
        }
        cout << "Your entered :" << n << endl;

    } while (true);
    return 0;
}