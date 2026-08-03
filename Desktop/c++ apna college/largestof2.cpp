#include <iostream>
using namespace std;
int main()
{
    int a, b;

    cout << "enter the value a" << endl;
    cin >> a;
    cout << "enter the value b" << endl;

    cin >> b;

    if (a >= b)
    {
        cout << "a is largest :" << a << endl;
    }
    else
    {
        cout << "b is largest" << b << endl;
    }
    return 0;
}