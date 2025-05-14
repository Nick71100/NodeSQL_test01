CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    age INT,
    role VARCHAR(100),
    mail VARCHAR(255)
  );
CREATE TABLE IF NOT EXISTS articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  contenu TEXT NOT NULL,
  auteur_id INT NOT NULL,
  date_publication DATETIME DEFAULT CURRENT_TIMESTAMP,
  statut ENUM('brouillon', 'publie') DEFAULT 'brouillon',
  
  FOREIGN KEY (auteur_id) REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);