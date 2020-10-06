package main

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"net/http"
)

// Data contains a pointer to the database
type Data struct {
	DB *gorm.DB
}

// Initialize - connects with the db
func (d *Data) Initialize(dbDriver string, dbURI string) {
	db, err := gorm.Open(dbDriver, dbURI)
	if err != nil {
		panic("failed to connect database")
	}

	d.DB = db

	d.DB.AutoMigrate(&Admin{})
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(200)
	w.Write([]byte("hello world!"))
}

func main() {
	http.HandleFunc("/", handler)
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
