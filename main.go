package main

import (
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	r := mux.NewRouter()
	log.Println(r)
	r.HandleFunc("/", http.HandlerFunc(getHome)).Methods("GET")

	http.Handle("/", r)
	http.ListenAndServe(":8080", nil)
}

func getHome(w http.ResponseWriter, r *http.Request) {
	// render(w, "frontend/build", nil)
}
