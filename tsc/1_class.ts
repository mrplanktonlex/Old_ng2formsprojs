class MyFckingClass{
  var1 = 'var1: I am default-public string. Non static. Can be accessed via an instance';
  public var2 = 'var2: Explicit Public string too. Non static.';
  private var3 = ' var3: is private string. Non static. Cannot be accessed via an instance';
  static var4 = 'var4: is static n default-public'; //can be used as MyFckingClass.var4 before an instance is even created.
  protected static var5 = 'var5: protected n static some shit';
  private static var6 = 'var6: private n static some shit';

  constructor(){ }

  static func1(){    return 'func1: static n public';  }
  protected static func2(){    return 'func2: static n public';  }
  protected static func3(){    return 'func3: static n public';  }
}
//1. console.log(MyFckingClass.var4); //works.

//2.
//2a. //console.log(MyFckingClass.var5); //not accessible.
//2b. //let x2 = new MyFckingClass(); // not accessible via direct-instance.
//2c.
/*
      class subclass2 extends MyFckingClass {}
      let x2 = new subclass2();
      console.log(x2);  //does NOT have var4, var5 n var6

      //So, var5 and var6 should be in subclass2, if u want an instance of subclass2 to access it.
      //Crap code:- Writing "protected static var5" is crap and so is "private static var6" (i think).
*/

//3. console.log(MyFckingClass.func1()); //works

//4.
/*
  class subclass4 extends MyFckingClass {}
  let x4 = new subclass4();
  console.log(x4);  //does NOT have var4, var5 n var6; nor does it have func1(), func2() or func3()
  //Crap code:- Writing "protected static func2()" is crap and so is "private static func3()" (i think).

*/
