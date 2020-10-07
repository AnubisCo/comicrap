package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Static("/", "./frontend/build")

	r.Run(":5000")
}
