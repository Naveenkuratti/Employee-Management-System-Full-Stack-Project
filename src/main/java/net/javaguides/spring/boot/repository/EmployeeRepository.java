package net.javaguides.spring.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.spring.boot.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>  {

}
