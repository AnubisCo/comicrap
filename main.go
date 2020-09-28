package main

import (
	"fmt"
	"log"
	"net/http"
)

func handle(w http.ResponseWriter, r *http.Request) {
	fmt.Println(w, "<h1>hello world!</h1>")
}

func main() {
	http.HandleFunc("/", handle)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
