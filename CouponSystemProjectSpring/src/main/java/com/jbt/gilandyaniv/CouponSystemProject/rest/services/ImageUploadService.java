package com.jbt.gilandyaniv.CouponSystemProject.rest.services;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.stereotype.Service;

import com.jbt.gilandyaniv.CouponSystemProject.beans.Company;

@Service
public class ImageUploadService {

	
	
	
	//TODO I'll figure this out
	//Lets assume the images are only jpg
	public boolean saveImage(InputStream is,Company company)  { 
		
		try {
			BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(new File(company.getName() + "/" )));
			byte[] buffer = new byte[2048];
			int length;
			
			while((length = is.read()) != -1)
			{
				bos.write(buffer,0,length);
			}
			return true;
		}
		catch (IOException e) {
			// TODO: handle exception
			return false;
		}
	}
}
