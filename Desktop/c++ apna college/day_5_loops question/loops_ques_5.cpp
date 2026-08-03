// QUESTION NUMBER:- 5
// Print the sum of digits of number using While loops:-
// n=10829 (1+0+8+2+9)
#include <iostream>
using namespace std;
int main()
{
    int n = 10829;
    int digSum = 0;
    while (n > 0)
    {
        int lastDig = n % 10;
        digSum += lastDig;
        cout << lastDig << " ";
        n = n / 10;
    }
    cout << "----> sum is :" << digSum << endl;
    return 0;
}