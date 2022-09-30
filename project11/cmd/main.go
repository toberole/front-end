package main

import (
	"fmt"
	"net/http"

	"github.com/go-go-demo/project11/test"
)

func testFunc(w http.ResponseWriter, r *http.Request) {
	fmt.Println("testFunc")
}

func main() {
	fmt.Println("hello main!")

	test.Demo1_1()
	// server := http.Server{
	// 	Addr: "127.0.0.1:8081",
	// }
	// http.HandleFunc("/", testFunc)
	// if err := server.ListenAndServe(); err != nil {
	// 	fmt.Println("start server error " + err.Error())
	// }
}
