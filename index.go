package main
import "fmt"

var (
	str = "packageValue"
)
func variableZeroValue() {
	var a int = 1
	var s string = "123"
	fmt.Println(a, s)
}
func variableShoter() {
	a := 1
	b := 2
	fmt.Println(a+b)
}
func main() {
	variableZeroValue()
	variableShoter()
	fmt.Println(str)
}