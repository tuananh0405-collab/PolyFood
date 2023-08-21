package io.javabrains.springsecurityjwt.repository;

import io.javabrains.springsecurityjwt.model.UserDisplay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDisplayRepository extends JpaRepository<UserDisplay, String> {
}
