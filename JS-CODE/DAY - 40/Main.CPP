  /*
        class ClassName{
            // access modifier
            // attributes
            // methods
           
        };
        
        
        access modifier : 
        private : values can be access within the class.
        public : out side the class.
        protected : inheritance.
        
        pillars of OOPS : 
            1 : Encapulation (to wrap / to combine within the class) 
                - every logic must be present in the class.
            2 : Inheritance : (to share) 
                - data can be sharede with other classess
            3 : Polymorphism : (many forms) 
                - functions have same name but vary with different signtaure
            4 : Abstraction (to secure / data hiding)

    */


#include <iostream>
using namespace std ;

class ArtiJS10{
    
    private :
    // data
    string subCourse ;
    string topic ;
    int totalStudents ;
    
    // methods 
    public :
    void setData()
    {
        subCourse = "js"; // predefined 
        topic = "class object";
        totalStudents = 17 ;
    }
    
    void add() = 0;
    void get()
    {
        cout<<subCourse<<" "<<topic<<" "<<totalStudents<<endl;
    }

    
};

class ArtiCPP11{
    string subCourse ;
    string topic ;
    int totalStudents ;
};


int main() {
    
    ArtiJS10 obj ; // obj ArtiJS10

    return 0;
}