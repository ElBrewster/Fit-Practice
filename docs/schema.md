user table
    user id that's generated
    account info (name)
    fit/demographics info

pattern table
    primary key - pattern id
    foreign key user id 
    array of likes (holds user ids)
    array of irrelevants (holds user ids)
    reference to the image
    
pattern comments table
    comment id (primary key)
    user id (foreign key) (should be indexed)
    pattern id (foreign key) (should be indexed)(all foreign keys should be indexed)
    comment text
    array of likes (holds user ids)
    array of irrelevants (holds user ids)
