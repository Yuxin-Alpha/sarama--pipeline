package main
import(
	"fmt"
)
type Cat struct {
	Name string // 默认是空串
	Age int // 默认是0
	Color string // 默认是空串
} 
func main() {
	// 指针修改值
	// var num int = 20
	// var ptr *int = &num
	// fmt.Println("num=", &num)
	// *ptr = 30
	// fmt.Println("num=", num)
	
	// 交换两个变量
	// var a int = 10
	// var b int = 50
	// a = a + b
	// b = a - b
	// a = a - b
	// var age int8 
	// fmt.Println("请输入年龄")
	// fmt.Scanln(&age)
	// if age > 10 {
	// 	fmt.Println("666")
	// } else {
	// 	fmt.Println("777")
	// }
	var cat1 Cat
	cat1.Name = "小白"
	cat1.Age = 3
	cat1.Color = "白色"
	fmt.Println(cat1)
}