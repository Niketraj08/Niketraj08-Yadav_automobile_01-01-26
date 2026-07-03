#include <iostream>
// #include <bits/stdc++.h>
using namespace std;
class Stack
{
    // properties
public:
    int *arr;
    int size;
    int top;

    // behaviour
    Stack(int size)
    {
        this->size = size;
        arr = new int[size];
        top = -1;
    }

    void push(int el)
    {
        if (size - top > 1)
        {
            top++;
            arr[top] = el;
        }
        else
        {
            cout << "Stack Overflow" << endl;
        }
    }

    void pop()
    {
        if (top == -1)
        {
            cout << "Stack Underflow" << endl;
        }
        else
        {
            top--;
        }
    }

    int peak()
    {
        if (top == -1)
        {
            cout << "Stack Underflow" << endl;
            return -1;
        }
        else
        {
            return arr[top];
        }
    }

    bool isEmpty()
    {
        if (top == -1)
        {
            return true;
        }
        return false;
    }
};

int main()
{

    Stack st(3);
    st.push(22);
    st.push(43);
    st.push(32);

    // stack overflow
    st.push(56); // not push

    cout << "Top element is " << st.peak() << endl;
    st.pop();
    cout << "Top element is " << st.peak() << endl;
    st.pop();
    cout << "Top element is " << st.peak() << endl;
    st.pop();
    cout << "Top element is " << st.peak() << endl;

    if (st.isEmpty())
    {
        cout << "Stack is empty" << endl;
    }
    else
    {
        cout << "Stack is not empty" << endl;
    }

    return 0;
}