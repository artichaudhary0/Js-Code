#include <iostream>
using namespace std;

/*
    Inheritance :
        1 : Single (one base class , one derived class)
        2 : Multiple (more then one base class , one derived class)
        3 : Multi-level
        4 : Hierarchical
        5 : Hybrid
*/

class C
{
protected:
    int c;

public:
    void setC()
    {
        cout << "Enter the value of C : ";
        cin >> c;
    }

    void getC()
    {
        cout << "Value of c is : " << c << endl;
    }
};

class A : public C
{
protected:
    int a;

public:
    void setA()
    {
        cout << "Enter the value of A : ";
        cin >> a;
    }

    void getA()
    {
        cout << "Value of a is : " << a << endl;
    }
};

class B : public C
{
protected:
    int b;

public:
    void setB()
    {
        cout << "Enter the value of B : ";
        cin >> b;
    }

    void getB()
    {
        cout << "Value of B is : " << b << endl;
    }
};

// hierarchical
class D : public B
{
protected:
    int d;

public:
    void setD()
    {
        cout << "Enter the value of D : ";
        cin >> d;
    }

    void getD()
    {
        cout << "Value of d is : " << d << endl;
    }
};

// multi - level
class E : public B
{
protected:
    int e;

public:
    void setE()
    {
        cout << "Enter the value of E : ";
        cin >> e;
    }

    void getE()
    {
        cout << "Value of e is : " << e << endl;
    }
};
class F : public E
{
protected:
    int f;

public:
    void setF()
    {
        cout << "Enter the value of F : ";
        cin >> f;
    }

    void getF()
    {
        cout << "Value of F is : " << f << endl;
    }
};

class G : public F
{
protected:
    int g;

public:
    void setG()
    {
        cout << "Enter the value of G : ";
        cin >> g;
    }

    void getG()
    {
        cout << "Value of G is : " << g << endl;
    }
};

// single
class H : public A
{
protected:
    int h;

public:
    void setH()
    {
        cout << "Enter the value of H : ";
        cin >> h;
    }

    void getH()
    {
        cout << "Value of H is : " << h << endl;
    }
};

int main()
{
    D d;
    G g;
    H h;

    h.setA();
    g.setB();
    h.setC();
    d.setD();
    g.setE();
    g.setF();
    g.setG();
    h.setH();

    h.getA();
    g.getB();
    h.getC();
    d.getD();
    g.getE();
    g.getF();
    g.getG();
    h.getH();

    return 0;
}