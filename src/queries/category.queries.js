const addCategory = `
 INSERT INTO category (
   name
 )
 VALUES ($1) RETURNING id, name, created_at
`;