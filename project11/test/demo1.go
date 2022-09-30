package test

import (
	"fmt"
	"html/template"
	"os"
	"path/filepath"

	"github.com/go-go-demo/project11/model"
)

func Demo1_1() {
	dir, _ := os.Getwd()
	absDir, _ := filepath.Abs(dir)
	absDirParentDir := filepath.Join(absDir, "./../")
	fmt.Println("absDirParentDir: " + absDirParentDir)

	t := template.New("html1.html")
	path := absDirParentDir + string(filepath.Separator) + "html" + string(filepath.Separator) + "html1.html"
	fmt.Println(path)
	t, err := t.ParseFiles(path)
	if err != nil {
		fmt.Println("error: " + err.Error())
		return
	}

	u1 := model.User{Name: "hello", Age: 1}
	m1 := map[string]interface{}{
		"name":   "小王子2",
		"gender": "男2",
		"age":    182,
	}

	m2 := map[string]interface{}{
		"u1": u1,
		"m1": m1,
	}
	t.Execute(os.Stdout, m2)
}

func Demo1_2() {
	type Stu struct {
		Name string `json:"name"`
	}

	stu := Stu{Name: "hello"}
	fmt.Println(stu)
	fmt.Println(stu.Name)
}
