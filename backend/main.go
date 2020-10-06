package main

import (
	// _ "github.com/go-sql-driver/mysql"
	// "github.com/jinzhu/gorm"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	// "net/http"
)

func main() {
	r := gin.Default()

	r.Use(static.Serve("/", static.LocalFile("../frontend", true)))

	r.Run()
}
