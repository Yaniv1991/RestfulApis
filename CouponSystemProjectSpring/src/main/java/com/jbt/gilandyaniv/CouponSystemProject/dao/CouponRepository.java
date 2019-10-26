package com.jbt.gilandyaniv.CouponSystemProject.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Coupon;

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
	
}
