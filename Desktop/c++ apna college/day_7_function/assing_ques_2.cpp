// QUESTION :- WRITE A FUNCTION TO PRINT IF A NUMBER IS ODD AND EVEN .
#include <iostream >
using namespace std;
int prod(int a, int b)
{
    return a * b;
}
bool isEven(int n)
{
    if (n % 2== 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
int main()
{
    cout << isEven(20) << endl;
    return 0;
}