// Admin has global priviledges and access to admin commands
type Admin struct {
	creator  *Creator
	users    []User
	creators []Creator
	data     []string
}

// Creator has the ability to post Issues under a Series that they own
type Creator struct {
	user     *User
	posts    []Post
	series   []Series
	merch    []Merch
	earnings []Purchase
	// ad revenue needs to be calculated in too
}

// User level account
type User struct {
	unregistered *Unregistered
	username     string
	password     string
	library      []Issue
	subs         []Series
	cart         Cart
	purchases    BuyHistory
}

// Unregistered keeps track of visits
type Unregistered struct {
	IP    []string
	count uint
}

// Series are a collection of issues put out by creators
type Series struct {
	name   string
	issues []Issue
}

// Issue holds all the pages in an issue that is published
type Issue struct {
	name  string
	pages []IssuePage
}

// IssuePage contains the page in an issue
type IssuePage struct {
	img []string
}

// Cart holds items to be bought
type Cart struct {
	items []string
}

// BuyHistory a list of all purchase transactions
type BuyHistory struct {
	receipts []Purchase
}

// Merch is the item being sold, it's price, and the Creator who released it
type Merch struct {
	by          *Creator
	price       float32
	title       string
	description string
	imgs        []string
}

// Purchase contains the purchase ID (which would be unique and generated at the time of the purchase) and the Merch sold
type Purchase struct {
	purchaseID  string
	item        Merch
	orderStatus string
}

// Post contains the title and body of a post
type Post struct {
	author *Creator
	title  string
	body   string
	imgs   []string
}