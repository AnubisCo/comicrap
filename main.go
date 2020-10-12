package main

import (
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	r := mux.NewRouter()
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./frontend/build")))

	http.Handle("/", r)
	http.ListenAndServe(":8080", nil)
}
