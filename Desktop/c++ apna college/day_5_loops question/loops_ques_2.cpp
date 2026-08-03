// QUESTION NUMBER :-2
// Print sum of first N natural number :-
#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter your number  N :";
    cin >> n;
    int sum =0;
    for (int i = 1; i<=n; i++)
    {
        sum = sum + i;
    }
    cout << "sum " << sum << endl;
    return 0;
}