package com.jbt.gilandyaniv.CouponSystemProject.dao;

import java.time.LocalDate;
import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;
import com.jbt.gilandyaniv.CouponSystemProject.beans.CouponType;

/**
 * Repositry class for Coupon.
 * @authors Yaniv Chen, Yair Sher & Gil Gouetta
 */

@Repository
public interface CouponRepository extends JpaRepository<Coupon,Integer> {
	@Transactional
	@Modifying
	@Query("delete from Coupon where end_date < current_date()")
	void deleteAllExpiredCoupons();
	
	@Transactional
	@Modifying
	@Query("delete from Coupon coupon where coupon.company.id = :id")
	void deleteAllCouponHistory(int id);

	Collection<Coupon> findAllByCouponType(CouponType type);

	@Query("from Coupon coupon where coupon.price <= :price")
	Collection<Coupon> findAllByMaxPrice(double price);
	
	@Query("from Coupon where end_date > :endDate")
	Collection<Coupon> findallByEndDate(LocalDate endDate);
	
}
